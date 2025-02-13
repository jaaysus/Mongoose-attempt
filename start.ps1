$nodemonProcess = Start-Process -FilePath "cmd.exe" -ArgumentList "/c nodemon server.js" -WorkingDirectory "E:\SQL 2nd Year\Cloud_Native\tp2-mongoose" -PassThru
Start-Sleep -Seconds 2

$npmProcess = Start-Process -FilePath "cmd.exe" -ArgumentList "/c npm run dev" -WorkingDirectory "E:\SQL 2nd Year\Cloud_Native\tp2-mongoose\client" -PassThru

$windowWidth = 500
$windowHeight = 500

function Set-WindowSizeAndPosition {
    param (
        [Parameter(Mandatory=$true)]
        [System.Diagnostics.Process]$process,
        [int]$xPosition,
        [int]$yPosition,
        [int]$width,
        [int]$height
    )

    Start-Sleep -Seconds 1
    $hwnd = $process.MainWindowHandle

    Add-Type @"
    using System;
    using System.Runtime.InteropServices;
    public class WindowManipulation {
        [DllImport("user32.dll")]
        public static extern bool MoveWindow(IntPtr hWnd, int x, int y, int width, int height, bool repaint);
    }
"@

    [WindowManipulation]::MoveWindow($hwnd, $xPosition, $yPosition, $width, $height, $true)
}

Set-WindowSizeAndPosition -process $nodemonProcess -xPosition 0 -yPosition 0 -width $windowWidth -height $windowHeight
Set-WindowSizeAndPosition -process $npmProcess -xPosition $windowWidth -yPosition 0 -width $windowWidth -height $windowHeight

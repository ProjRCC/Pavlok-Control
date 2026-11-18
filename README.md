# Pavlok Control V1.9 — installable HTTPS web app

## Deploy in one step

Upload the **ZIP archive** to https://app.netlify.com/drop (Netlify Drop accepts ZIP uploads). It will provide a real `https://...netlify.app/` URL.

On your Android phone, open the HTTPS URL **in Chrome**. Press **Connect to watch** once and select your Pavlok 3. Browser Bluetooth grants are specific to the site address and do not transfer from `content://downloads`. Later opens try reconnecting automatically to an already-authorized device while the page is active.

To make an icon: in Chrome, use menu ⋮ > **Add to Home screen** or **Install app**. Launch it thereafter from its icon.

## Changes from V1.8

- Removed redundant native confirmation popups before starting a timer with zaps or saving an alarm with zaps. Delete and empty-watch overwrite confirmations remain.
- Automatically reuses previously authorized Web Bluetooth device via `navigator.bluetooth.getDevices()` when supported.
- Starts on the Alarms tab, with a compact Connect button until connected.
- Includes proper PWA manifest, 192/512 icons, and service worker for offline loading.
- Existing watch alarm and timer BLE commands preserved; no change to stored alarm schedules merely by opening the app.

## Important limitations

- The *watch* executes native alarms after Chrome is closed; a closed browser is **not** listening for alarm events or executing extra timer pulses. Tapping the home icon opens the interface but cannot retroactively fetch an earlier ALARM FIRING notification; the live status may show unknown until the next event.
- Do not rely on browser-managed repeat stimuli when the browser is closed, backgrounded or disconnected.
- A PWA cannot open itself automatically when a Pavlok alarm fires. Opening the home icon is manual.
- A new HTTPS site requires granting Bluetooth permission again once.
- This is an unofficial app, and first deployment/Bluetooth auto reconnect on the hosted origin require physical verification.
- Keep a separate backup wake-up alarm until reliability is demonstrated.

Protocol acknowledgments: LibreShock (MIT), https://github.com/hairyfred/LibreShock; independently documented Pavlok protocol by https://github.com/Khronos31/home-assistant-pavlok.

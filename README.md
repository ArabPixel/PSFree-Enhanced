# PSFree Enhanced
based on PSFree version 1.5.1

PSFree is a collection of exploits for the PS4 console. The main focus of the repo is for the PS4.

## Features

- **Auto-detection:** Automatically detects console type and firmware version (via `src/config.mjs`).
- **WebKit Exploit (PSFree):** Entry point via the console's web browser.
- **Kernel Exploit (Lapse):** Escalates privileges to kernel level.
- **Payload Loader:** After successful kernel exploitation listens for a payload on port 9020.

## Additional features
- Language switcher
- HEN flavor selector
- GoldHEN version selector
- Descriptive payload selection
- Unsuported payload loading protection
- Load payloads with GoldHEN's PayLoader through a mirrored [http host](http://psfree-enhanced.free.nf/)
- Offers more features when hosted locally on a PC or a PS4 using [PS4-Websrv](https://github.com/ArabPixel/ps4-websrv)
  - Send payloads from any smart device to the PS4 
  - Scans the network to find the PS4
- Up to date

## Supported by this Repository

This table indicates firmware versions for which the _current version_ of this repository provides a functional and tested exploit chain.

|  #            | PSFree    | Lapse     |GoldHEN's PayLoader
| :------------ | :-------- | :-------- | :--------
| PlayStation 4 | 7.00-9.60 | 7.00-9.60 | 7.00 - latest


## TODO List

- [X] ~~Blackscreen/Save issue with certain games~~ Issue is patched post-exploit
  - [ ] Determine root cause and fix more directly
- [ ] `lapse.mjs`: Just set the bits for JIT privs
- [ ] `view.mjs`: Assumes PS4, support PS5 as well
- [ ]  Support lower firmwares by adding other exploits

## Contribution
You can :
- look at the [languages folder](https://github.com/ArabPixel/PSFree-Enhanced/tree/main/includes/js/languages) and PR your language!
-  improve the host by modefying, updating or adding new features!
## Copyright and Authors:

AGPL-3.0-or-later (see [LICENSE](LICENSE)). Part of this repo belongs to the group `anonymous`. We refer to anonymous contributors as "anonymous" as well.

## Credits:

- anonymous for PS4 firmware kernel dumps
- Check the appropriate files for any **extra** contributors. Unless otherwise stated, everything here can also be credited to us.
- Nazky for some code inspiration.
- Feyzee61 for the second PSFree lapse implementation.

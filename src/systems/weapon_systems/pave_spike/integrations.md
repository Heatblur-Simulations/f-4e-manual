# Integrations

## INS integration

During normal operation, the pod is connected with the INS. This can be disabled
manually by pressing the INS OUT push button.

![ins_out_lamp](../../../img/ins_out_lamp.png)

With INS disabled, the following functions are not available:

- Automatic target stabilization during Track-mode
- Roll-stabilization during 12-VIS Acquisition-mode
- Slant range computation
- WRCS integration

## WRCS integration

During normal operation, the pod is connected with the WRCS. This can be
disabled manually by pressing the WRCS OUT push button.

![wrcs_out_lamp](../../../img/wrcs_out_lamp.png)

Also, the WRCS is disabled automatically without INS integration, or if
currently not in DIRECT or TGT FIND weapon mode.

![pave_spike_weapon_sel](../../../img/pave_spike_weapon_sel.png)

With WRCS disabled, the following functions are not available:

- WRCS Acquisition mode
- Memory mode
- WRCS Automatic Weapon Release

And some functions are degraded, but still available:

- Slant range computation
- Automatic target stabilization during Track-mode

# PID Tuning

Proper PID tuning ensures stable and accurate motion control.

## Parameters

- Kp – Proportional Gain
- Ki – Integral Gain
- Kd – Derivative Gain

## Basic Tuning Approach

1. Increase Kp until response becomes aggressive.
2. Add Kd to reduce oscillation.
3. Add Ki to eliminate steady-state error.

## Best Practices

- Tune one axis at a time.
- Use step response analysis.
- Monitor following error.

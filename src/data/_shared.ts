import type { OptionGroup } from '../types';

/**
 * Standard equipment/options preset shared across every make file.
 * Pass `extras` to add model-specific optional equipment to the Safety group.
 */
export const safetyComfort = (extras: string[] = []): OptionGroup[] => [
  {
    name: 'Safety',
    standard: ['ABS', 'ESC', 'front airbags', 'ISOFIX', 'tire pressure monitoring'],
    optional: ['adaptive cruise control', 'lane assist', 'blind spot monitor', ...extras]
  },
  {
    name: 'Comfort',
    standard: ['air conditioning', 'electric windows', 'multifunction steering wheel'],
    optional: ['heated seats', 'dual-zone climate', 'keyless entry', 'panoramic roof']
  },
  {
    name: 'Infotainment',
    standard: ['Bluetooth audio', 'USB', 'trip computer'],
    optional: ['Apple CarPlay', 'Android Auto', 'navigation', 'premium sound']
  },
  {
    name: 'Exterior',
    standard: ['body-colored bumpers', 'LED daytime running lights'],
    optional: ['matrix LED headlights', '17–19 inch alloys', 'sport body kit', 'roof rails']
  }
];

/** EV-focused equipment preset for electric models. */
export const evComfort = (extras: string[] = []): OptionGroup[] => [
  {
    name: 'Safety',
    standard: ['ABS', 'ESC', 'front + side airbags', 'ISOFIX', 'tire pressure monitoring', 'autonomous emergency braking'],
    optional: ['adaptive cruise control', 'lane keeping', 'blind spot monitor', 'highway assist', ...extras]
  },
  {
    name: 'Comfort',
    standard: ['automatic climate control', 'electric windows', 'heat pump (market dependent)'],
    optional: ['heated seats', 'heated steering wheel', 'keyless entry', 'panoramic glass roof']
  },
  {
    name: 'Charging & Infotainment',
    standard: ['CCS DC fast charging', 'large touchscreen', 'OTA updates', 'route planner'],
    optional: ['11 kW onboard charger', 'heat pump', 'premium sound', 'app remote control']
  },
  {
    name: 'Exterior',
    standard: ['full LED lighting', 'aero wheels'],
    optional: ['matrix LED headlights', '19–21 inch alloys', 'sport package', 'roof rails']
  }
];

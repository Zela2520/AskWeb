export type ButtonProps = {
  label: string;
  icon: string;
  iconAlt: string;
  value: number | string;
  isActive: boolean;
  onClick: () => void;
}
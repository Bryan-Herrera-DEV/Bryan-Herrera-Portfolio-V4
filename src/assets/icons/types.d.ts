interface IconProps {
    size?: {
        height?: number;
        width?: number;
    };
    color?: string;
    className?: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    key?: string;
}
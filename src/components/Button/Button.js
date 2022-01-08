import "./button.css"

const STYLES = [
    'important',
    'minor'
]

const SIZE = [
    'big',
    'small'
]


export const Button = ({
    children,
    onClick,
    style,
    size
}) => {


    const checkStyle = STYLES.includes(style) 
    ? style 
    : STYLES[0];

    const checkSizes = SIZE.includes(size) 
    ? size 
    : SIZE[0];

    return (
        <button onClick={onClick} className={`btn ${checkStyle} ${checkSizes}`}>{children}</button>
    );
}

export default function ColorCircle({ color }) {

    return (
        <div className="color-circle" style={{
            backgroundcolor: color + '66',
            border: '5px dotted' + color,
            animation: 'spin 20s linear infinite'
        }}
        ></div>
    )
}
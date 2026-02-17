import React from 'react';

type CircleProps = {
    size?: number;
    color: 'blue' | 'red' | 'green' | 'yellow';
};

const colorMap: Record<CircleProps['color'], string> = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
};

const Circle: React.FC<CircleProps> = ({size = 50, color = 'blue'}) => {
    return (
        <div
            className={`${colorMap[color]} rounded-full`}
            style={{ width: `${size}px`, height: `${size}px`}}
        />
    );
};

export default Circle;
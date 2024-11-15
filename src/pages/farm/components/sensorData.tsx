import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";

import styled from "@emotion/styled";

interface SensorDataProps {
    Icon: React.FC;
    label: string;
    value: number;
    unit: string;
}

const SensorData: React.FC<SensorDataProps> = ({ Icon, label, value, unit }) => (
    <Container
        r={224}
        g={label === "온도" || label === "지온" ? Math.max(0, 247 - (247 * (value - 22)) / (40 - 22)) : 247}
        b={label === "온도" || label === "지온" ? Math.max(0, 223 - (223 * (value - 22)) / (40 - 22)) : 223}
    >
        <Title>
            <Icon></Icon> {label}
        </Title>
        <Value>
            {value} {unit}
        </Value>
    </Container>
);

export default SensorData;
const Container = styled.div<{ r: number; g: number; b: number }>`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    background-color: ${({ r, g, b }) => `rgb(${r}, ${g}, ${b})`};
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

const Value = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

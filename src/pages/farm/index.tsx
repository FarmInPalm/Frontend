import { IoWater, IoPinSharp, IoEarth, IoPartlySunnyOutline, IoRainyOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

import styled from "@emotion/styled";

import { Spinner } from "@/components/common/Spinner";

import { useFetchFarmDetail } from "@/pages/farm/apis/fetchFarmDetail";
import { useFetchMonitorStream } from "@/pages/farm/apis/fetchMonitorStream";
import SensorData from "@/pages/farm/components/sensorData";

import dummyVideo from "@/assets/src.mp4";

const FarmDetailPage: React.FC = () => {
    const navigate = useNavigate();
    const { farmId } = useParams<{ farmId: string }>();
    const { data: farmData, isLoading: isFarmLoading, error: farmError } = useFetchFarmDetail(Number(farmId));
    const { data: streamData, isLoading: isStreamLoading, error: streamError } = useFetchMonitorStream();

    if (isFarmLoading || isStreamLoading) return <Spinner />;
    if (farmError || streamError) return <ErrorMessage>데이터를 불러오는 데 실패했습니다.</ErrorMessage>;
    if (!farmData) return null;

    const { monitorName, temperature, humidity, groundTemperature, groundHumidity, co2Concentration } = farmData;

    return (
        <>
            <Container>
                <Header>
                    <FarmName>
                        <ExitButton onClick={() => navigate("/monitor")}>←</ExitButton>
                        {monitorName}
                    </FarmName>
                </Header>
                <GridContainer>
                    <SensorData Icon={IoPartlySunnyOutline} label="온도" value={temperature} unit="℃" />
                    <SensorData Icon={IoRainyOutline} label="습도" value={humidity} unit="g/m³" />
                    <SensorData Icon={IoPinSharp} label="지온" value={groundTemperature} unit="℃" />
                    <SensorData Icon={IoWater} label="지습" value={groundHumidity} unit="g/m³" />
                    <SensorData Icon={IoEarth} label="CO₂" value={co2Concentration} unit="ppm" />
                </GridContainer>
            </Container>
            <StreamDataContainer>
                <StreamTitle>실시간 스트리밍 정보</StreamTitle>
                <VideoContainer>
                    <video width="100%" autoPlay loop muted>
                        <source src={dummyVideo} type="video/mp4" />
                    </video>
                </VideoContainer>
            </StreamDataContainer>
        </>
    );
};

export default FarmDetailPage;

const ExitButton = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    margin: 20px;
    background-color: lightgrey;
    border-radius: 25px;
`;

const Header = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 16px;
`;

const FarmName = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    background-color: #38a169;
    padding: 8px 16px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
    max-width: 400px;
`;

const StreamDataContainer = styled.div`
    margin-top: 20px;
    padding: 16px;
    background-color: #f0f4f8;
    border-radius: 25px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StreamTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

const VideoContainer = styled.div`
    margin-top: 20px;
    width: 100%;
`;

const ErrorMessage = styled.div`
    font-size: 18px;
    color: #e53e3e;
    margin-top: 20px;
`;

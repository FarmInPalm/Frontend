import { useState } from "react";
import { IoListOutline } from "react-icons/io5";

import EventModifyPanel from "@/pages/history/components/Panels/EventModifyPanel";

import { EventItemWrapper, ItemWrapper, ItemTitle, ItemDescriptor } from "./style";

interface EventItemProps {
    eventId: number;
    eventName: string;
    eventStartDate: string;
    eventStartDay: string;
    eventEndDate: string;
    eventEndDay: string;
}

const EventItem = ({
    eventId,
    eventName,
    eventStartDate,
    eventStartDay,
    eventEndDate,
    eventEndDay,
}: EventItemProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const startDate = eventStartDate.split("-");
    const endDate = eventEndDate.split("-");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <EventItemWrapper>
                <ItemWrapper>
                    <ItemDescriptor>
                        {startDate[1]}월 {startDate[2]}일 ~ {endDate[1]}월 {endDate[2]}일
                    </ItemDescriptor>
                    <ItemTitle>▶ {eventName}</ItemTitle>
                </ItemWrapper>
                <IoListOutline onClick={handleOpenModal} />
            </EventItemWrapper>
            {isModalOpen && <EventModifyPanel eventId={eventId} onClose={handleCloseModal} />}
        </>
    );
};

export default EventItem;

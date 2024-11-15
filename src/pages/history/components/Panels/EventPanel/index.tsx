import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Spinner } from "@/components/common/Spinner";

import { useFetchEventList } from "@/pages/history/apis/Event/fetchEventList";

import { PanelWrapper } from "../PanelStyle";
import { EventAddButton } from "./components/EventAddButton";
import EventItem from "./components/EventItem";
import { EventDisplay, DateText, EventText } from "./style";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const formatSelectedDate = (date: Value): string => {
    if (Array.isArray(date)) {
        const [start, end] = date;
        const startDate = start ? start.toLocaleDateString() : "";
        const endDate = end ? end.toLocaleDateString() : "";
        return `${startDate} - ${endDate}`;
    }
    return date ? date.toLocaleDateString() : "";
};

const EventPanel = () => {
    const userId = 1;
    const { data: events, isLoading, error, refetch } = useFetchEventList(userId);

    const [selectedDate, setDateSelected] = useState<Value>(new Date());
    const date = formatSelectedDate(selectedDate).split(".");

    if (isLoading) return <Spinner />;
    if (error) return <div>Error loading events.</div>;

    return (
        <PanelWrapper>
            <Calendar onChange={setDateSelected} value={selectedDate} />
            <EventDisplay>
                <DateText>
                    {date[0]}년 {date[1]}월 {date[2]}일 이벤트
                </DateText>
                <EventText>
                    {events &&
                        events.map((event) => (
                            <EventItem
                                key={event.eventId}
                                eventId={event.eventId}
                                eventName={event.eventTitle}
                                eventStartDate={event.eventStartDate}
                                eventStartDay={event.eventStartDay}
                                eventEndDate={event.eventEndDate}
                                eventEndDay={event.eventEndDay}
                            />
                        ))}
                </EventText>
            </EventDisplay>
            <EventAddButton refetchEvents={refetch} />
        </PanelWrapper>
    );
};

export default EventPanel;

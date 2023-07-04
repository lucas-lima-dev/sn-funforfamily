import { useState, useEffect } from "react";
import axios from "axios";

function useFetchTimeline(token, isResponseEdited, isPostDeleted, isPostCreated) {
    const [timelineContent, setTimelineContent] = useState([]);
    
    useEffect(() => {
        const URL = `${import.meta.env.VITE_API_BASE_URL}/home/timeline`;
        const header = { headers: { Authorization: `Bearer ${token}` } };

        const fetchData = async () => {
        try {
            const response = await axios.get(URL, header);
            
            setTimelineContent(response.data);
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Please try again.");
        }
    }
    fetchData();
    }, [token, isResponseEdited, isPostDeleted, isPostCreated]);

    return timelineContent;
}

export default useFetchTimeline;

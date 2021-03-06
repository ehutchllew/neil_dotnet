import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { ActivityContext } from "../../../app/stores/activityStore";
import { LoadingIndicator } from "../../../app/layout/LoadingIndicator";
import { ActivityDetailHeader } from "./ActivityDetailHeader";
import { ActivityDetailInfo } from "./ActivityDetailInfo";
import { ActivityDetailChat } from "./ActivityDetailChat";
import { ActivityDetailSidebar } from "./ActivityDetailSidebar";

export const ActivityDetails = observer(({ history, match }) => {
    const activityStore = useContext(ActivityContext);
    const { loadActivity, loadingIndicator, selectedActivity } = activityStore;

    useEffect(() => {
        loadActivity(match.params.id);
    }, [history, loadActivity, match.params.id]);

    if (loadingIndicator) {
        return <LoadingIndicator content="Loading Activity..." />;
    }

    if (!selectedActivity) {
        return null;
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailHeader activity={selectedActivity} />
                <ActivityDetailInfo activity={selectedActivity} />
                <ActivityDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailSidebar />
            </Grid.Column>
        </Grid>
    );
});

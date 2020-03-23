import React from "react";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";
import { defaultTasksData } from "./TaskList.stories";
import { PureInboxScreen } from "./InboxScreen";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [story => <Provider store={store}>{story()}</Provider>]
};

// A simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: defaultTasksData
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch")
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="Something" />;

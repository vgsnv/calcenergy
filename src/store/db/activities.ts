export interface Activity {
  _id: string;
  key: string;
  title: string;
}

export type Activities = Array<Activity>;

const ACTIVITIES_SET = "DB/ACTIVITIES_SET";

export const activitiesSet = data => ({
  type: ACTIVITIES_SET,
  data
});

const defaultActivities: Activities = [];

export default (state: Activities = defaultActivities, action) => {
  switch (action.type) {
    case ACTIVITIES_SET:
      return [...action.data];
    default:
      return state;
  }
};

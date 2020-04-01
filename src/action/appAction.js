export const getUserList = () => {
    return (dispatch) => {
        dispatch({
            payload: LIST_OF_USERS,
            type: 'LIST_OF_USERS'
        })
        // fetch('https://drive.google.com/file/d/1xZa3UoXZ3uj2j0Q7653iBp1NrT0gKj0Y/view')
        //     // .then(response => response.json())
        //     .then((finalRes) => {
        //         console.log("finalRes", finalRes);
        //         dispatch({
        //             payload: finalRes,
        //             type: 'LIST_OF_USERS'
        //         })
        //     })
        //     .catch((err) => {
        //         console.log("error--->", err);
        //     })
    }
}
const LIST_OF_USERS = {
    ok: true,
    members: [{
        id: "W012A3CDE",
        real_name: "Egon Spengler",
        tz: "America/Los_Angeles",
        activity_periods: [{
            start_time: "Feb 1 2020  1:33PM",
            end_time: "Feb 1 2020 1:54PM"
        },
        {
            start_time: "Mar 1 2020  11:11AM",
            end_time: "Mar 1 2020 2:00PM"
        },
        {
            start_time: "Mar 16 2020  5:33PM",
            end_time: "Mar 16 2020 8:02PM"
        }
        ]
    },
    {
        id: "W07QCRPA4",
        real_name: "Glinda Southgood",
        tz: "Asia/Kolkata",
        activity_periods: [{
            start_time: "Feb 1 2020  1:33PM",
            end_time: "Feb 1 2020 1:54PM"
        },
        {
            start_time: "Mar 1 2020  11:11AM",
            end_time: "Mar 1 2020 2:00PM"
        },
        {
            start_time: "Mar 16 2020  5:33PM",
            end_time: "Mar 16 2020 8:02PM"
        }
        ]
    },
    {
        id: "W07QCRPA5",
        real_name: "Sachin Tendulkar",
        tz: "Asia/Kolkata",
        activity_periods: [{
            start_time: "Feb 1 2020  1:33PM",
            end_time: "Feb 1 2020 1:54PM"
        },
        {
            start_time: "Mar 1 2020  11:11AM",
            end_time: "Mar 1 2020 2:00PM"
        },
        {
            start_time: "Mar 16 2020  5:33PM",
            end_time: "Mar 16 2020 8:02PM"
        }
        ]
    },
    {
        id: "W07QCRPA6",
        real_name: "Sourav Gangully",
        tz: "Asia/Kolkata",
        activity_periods: [{
            start_time: "Feb 1 2020  1:33PM",
            end_time: "Feb 1 2020 1:54PM"
        },
        {
            start_time: "Mar 1 2020  11:11AM",
            end_time: "Mar 1 2020 2:00PM"
        },
        {
            start_time: "Mar 16 2020  5:33PM",
            end_time: "Mar 16 2020 8:02PM"
        }
        ]
    },
    {
        id: "W07QCRPA7",
        real_name: "Virat Kohli",
        tz: "Asia/Kolkata",
        activity_periods: [{
            start_time: "Feb 1 2020  1:33PM",
            end_time: "Feb 1 2020 1:54PM"
        },
        {
            start_time: "Mar 1 2020  11:11AM",
            end_time: "Mar 1 2020 2:00PM"
        },
        {
            start_time: "Mar 16 2020  5:33PM",
            end_time: "Mar 16 2020 8:02PM"
        }
        ]
    }
    ]
}
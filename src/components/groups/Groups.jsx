import React from 'react';
import "./groups.scss";
import Group from '../group/Group';

const Groups = () => {
    const data = [
        { name: "flaming01", id: 1 },
        { name: "flamingo2", id: 2 },
        { name: "flaming3", id: 3 },
        { name: "flaming4", id: 4 },
        { name: "flaming01", id: 1 },
        { name: "flamingo2", id: 2 },
        { name: "flaming3", id: 3 },
        { name: "flaming4", id: 4 },
        { name: "flaming01", id: 1 },
        { name: "flamingo2", id: 2 },
        { name: "flaming3", id: 3 },
        { name: "flaming4", id: 4 },
        { name: "flaming01", id: 1 },
        { name: "flamingo2", id: 2 },
        { name: "flaming3", id: 3 },
        { name: "flaming4", id: 4 },
        { name: "flaming01", id: 1 },
        { name: "flamingo2", id: 2 },
        { name: "flaming3", id: 3 },
        { name: "flaming4", id: 4 },
        { name: "flaming01", id: 1 },
        { name: "flamingo2", id: 2 },
        { name: "flaming3", id: 3 },
        { name: "flaming4", id: 4 },
    ];

    return (
        <div className="groupsCard">
            {data.map((group) => (
                <Group group={group} key={group.id} />
            ))}
        </div>
    );
};

export default Groups;

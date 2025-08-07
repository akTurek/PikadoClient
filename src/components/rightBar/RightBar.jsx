import React, { useEffect, useState } from 'react'
import "./rightBar.scss"
import { makeRequest } from '../../helpers/axios'
import Invite from '../invite/Invite'
import InviteF from '../inviteF/InviteF'
import { useQuery } from '@tanstack/react-query';

const RightBar = () => {

    const [invites, setInvites] = useState([])

    const [invitesF, setInvitesF] = useState([])

    const getInvites = async () => {

        try {
            const res = await makeRequest.get("invites/get")
            return res.data;
        } catch (error) {
            return []
        }

    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['invites'],
        queryFn: () => getInvites(),
        onSuccess: (data) => setInvites(data),
        refetchInterval: 1000,

    })


    const getFriendInvites = async () => {

        try {
            const res = await makeRequest.get("friends/getfriendsinvites")
            return res.data;
        } catch (error) {
            return []
        }

    }

    const { dataF, isLoadingF, isErrorF } = useQuery({
        queryKey: ['invitesF'],
        queryFn: () => getFriendInvites(),
        onSuccess: (data) => setInvitesF(data),
        refetchInterval: 1000,

    })




    return (
        <div className='boxRB'>
            <div className="cardGamesRB">
                <div className="topRB">
                    <h1>Friend Invites</h1>
                </div>
                <div className="downRB">
                    {invites && invitesF.map((invite) => (
                        <InviteF invite={invite} key={invite.id} />
                    ))}
                </div>
            </div>
            <div className="cardGamesRB">
                <div className="topRB">
                    <h1>Game Invites</h1>
                </div>
                <div className="downRB">
                    {invites && invites.map((invite) => (
                        <Invite invite={invite} key={invite.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RightBar
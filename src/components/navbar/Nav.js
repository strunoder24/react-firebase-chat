import React, {useState, useEffect} from 'react';
import firebase from '~/firebase';

import { observer, inject } from "mobx-react";

export default inject('store')(observer(function (props) {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        return firebase.db.collection('channels').onSnapshot(snapshot => {
            const docs = [];
            snapshot.forEach(doc => {
                docs.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setChannels(docs);
        });
    }, []);

    const user = () => {
        if (props.store.users.user) {
            return (
                <div>
                    <img
                        className="UserImage"
                        alt="whatever"
                        src="https://placekitten.com/64/64"
                    />
                    <div>Logged user name</div>
                    <div>
                        <button className="text-button">log out</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <img
                        className="UserImage"
                        alt="whatever"
                        src="https://placekitten.com/64/64"
                    />
                    <div>Anonymous</div>
                    <div>
                        <button className="text-button">log in</button>
                    </div>
                </div>
            )
        }
    };

    return (
        <div className="Nav">
            <div className="User">
                { user() }
            </div>
            <nav className="ChannelNav">
                {channels.map(channel => (
                    <a key={channel.id} href={`/channel/${channel.id}`}># {channel.id}</a>
                ))}
            </nav>
        </div>
    );
}))

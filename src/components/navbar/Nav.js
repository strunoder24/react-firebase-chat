import React, {useState, useEffect} from 'react';
import db from '~/firebase';
import { observer } from 'mobx-react';

// function Nav() {
//     const [channels, setChannels] = useState([]);
//
//     useEffect(() => {
//         return db.collection('channels').onSnapshot(snapshot => {
//             const docs = [];
//             snapshot.forEach(doc => {
//                 docs.push({
//                     ...doc.data(),
//                     id: doc.id
//                 });
//             });
//             setChannels(docs);
//         });
//     }, []);
//
//     return (
//         <div className="Nav">
//             <div className="User">
//                 <img
//                     className="UserImage"
//                     alt="whatever"
//                     src="https://placekitten.com/64/64"
//                 />
//                 <div>
//                     <div>Ryan Florence</div>
//                     <div>
//                         <button className="text-button">log out</button>
//                     </div>
//                 </div>
//             </div>
//             <nav className="ChannelNav">
//                 {channels.map(channel => (
//                     <a key={channel.id} href={`/channel/${channel.id}`}># {channel.id}</a>
//                 ))}
//             </nav>
//         </div>
//     );
// }

export default class extends React.Component {
    state = {
        channels: [],
    };

    componentDidMount() {
        db.collection('channels').onSnapshot(snapshot => {
            const docs = [];
            snapshot.forEach(doc => {
                docs.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            this.setState({
                channels: docs
            })
        })
    }

    render(){
        return (
            <div className="Nav">
                <div className="User">
                    <img
                        className="UserImage"
                        alt="whatever"
                        src="https://placekitten.com/64/64"
                    />
                    <div>
                        <div>Ryan Florence</div>
                        <div>
                            <button className="text-button">log out</button>
                        </div>
                    </div>
                </div>
                <nav className="ChannelNav">
                    {this.state.channels.map(channel => (
                        <a key={channel.id} href={`/channel/${channel.id}`}># {channel.id}</a>
                    ))}
                </nav>
            </div>
        );
    }
}

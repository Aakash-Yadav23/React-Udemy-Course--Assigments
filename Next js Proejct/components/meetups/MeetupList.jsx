
import MeetupItem from './MeetupItem';
import './meetupList.css';

function MeetupList(props) {
    return (
        <ul className="list">
            {props.meetups.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            ))}
        </ul>
    );
}

export default MeetupList;
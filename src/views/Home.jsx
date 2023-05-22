import { useFirestore, useFirestoreDocData } from "reactfire";
import { doc } from "firebase/firestore";

export default function Home() {
    // const [ value, setValue ] = useState('');

    const chatReference = doc(useFirestore(), 'chats', 'john');
    const { data } = useFirestoreDocData(chatReference);

    console.log(data);

    return <>
    { data?.messages?.map(message => <p>{ message }</p>)}
    </>
}
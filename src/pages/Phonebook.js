//import { useDispatch } from "react-redux";
//import { useEffect } from "react";
//import { fetchTasks } from "../redux/tasks/tasks.thunk";
import { Section } from "components/Section";
import { ContactForm } from "components/ContactForm";
import { Filter } from "components/Filter";
import { ContactList } from "components/ContactList";

const Phonebook = () => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchTasks('arg'))
    // }, [])

    return (
        <>
            <Section title="Phonebook">
                <ContactForm />
            </Section>
            <Section title="Contacts">
                <Filter />
                {/* {isLoading && !error &&
                    <StyledNotification>
                        Request in progress...
                    </StyledNotification>} */}
                <ContactList />
            </Section>
        </>
    );
};

export default Phonebook;
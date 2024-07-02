import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import useCollection from "@/composables/useCollection";
import {ref} from "vue";

async function getAllNotesContext() {
    const {user} = userAuthState();
    const messages = ref([]);

    const noteObj =
        {
            role: "user",
            content:
                "I will give you all my notes content for context. It will also include the note title so you are able to identify each note",
        };
    messages.value.push(noteObj);

    /* Getting persistent note */
    const {getDocument, error: docError} = useDoc("notes");
    const persistentDoc = await getDocument(user.value.uid);
    const content = "Note title: [Persistent Note]. Content: [" + persistentDoc.data().payload + ']';
    messages.value.push({
        role: "user", content
    });


    /* Getting note list (shared notes)*/
    const {getDocumentsContent} = useCollection();
    const {docs: sharedNotes} = await getDocumentsContent(
        "shared-notes",
        ["users", "array-contains", user.value.email],
        ["owner", "==", user.value.email]
    );

    sharedNotes.forEach(doc => {
        if (doc.payload) {
            const content = `Note title: [${doc.title}]. Content: [` + doc.payload + ']';
            messages.value.push({role: "user", content});
        }
    })

    /* Getting daily notes */
    const {getSubcollectionDocumentsContent} = useCollection();
    const {docs: dailyNotes} = await getSubcollectionDocumentsContent(
        "notes",
        user.value.uid,
        "daily"
    );

    dailyNotes.forEach(doc => {
        if (doc.payload) {
            const content = `Note title: [${doc.title}]. Content: [` + doc.payload + ']';
            messages.value.push({role: "user", content,});
        }
    })

    return messages.value;
}

export default getAllNotesContext;
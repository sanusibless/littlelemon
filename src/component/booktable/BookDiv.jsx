import BookForm from "./BookForm";
import BookImage from "./BookImage";

export default function BookDiv() {
    return (
        <div className="book-div">
            <BookImage />
            <BookForm />
        </div>
    )
}
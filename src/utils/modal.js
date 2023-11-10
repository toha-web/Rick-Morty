import ReactDOM from "react-dom/client";
import Modal from '../components/Modal';

const modalBox = ReactDOM.createRoot(document.getElementById("modal"));

export const modal = {
    open(info){
        modalBox.render(<Modal info={info} close={this.close} />);
        document.querySelector("body").classList.add("freeze");
    },
    close(){
        modalBox.render(null);
        document.querySelector("body").classList.remove("freeze");
    }
}
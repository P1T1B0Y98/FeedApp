import { createSignal, createEffect, createMemo } from "solid-js";
import "../button.css"
function APIButton() {
    createEffect(() => {
        console.log("Button has been pressed");
      });
    return (
        <div>
            <div class="button api">
                <a href={import.meta.env.VITE_SWAGGER_URL} target='_blank'>API</a>
            </div>
        </div>
    );
  }

  export default APIButton;


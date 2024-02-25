import Image from "next/image";
import {Button} from "@mui/material";

export default function Home() {
  return (
    <main>
      <div>
          <div className=" ">
              Drag and drop Image Of Player
          </div>
          <div>
              <div>
                  <Button sx={{ backgroundColor: '#000000' }}>
                      Click me
                  </Button>
              </div>
          </div>
      </div>
    </main>
  );
}

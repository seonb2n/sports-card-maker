import {InputDataForm} from "@/components/InputDataForm";

export default function Home() {

  return (
    <main>
      <div style={{width: '1100px'}}>
          <div>
             Create your own player Card!
          </div>
          <div>
              <div>
                  <InputDataForm />
              </div>
          </div>
      </div>
    </main>
  );
}

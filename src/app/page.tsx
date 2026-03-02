import { IUser } from "@/types/home-page-types";

const App = () => {
  const users: IUser[] = [
    {
      age: 12,
      name: "ramin",
      surname: "mammadzada",
      langs: ["html", "css"],
      getFullName() {
        return this.name + " " + this.surname;
      },
    },
    {
      age: 15,
      name: "leyla",
      surname: "aliyeva",
      getFullName() {
        return this.name + " " + this.surname;
      },
    },
  ];

  type TFunc = (name: string, age: number) => string | number;

  const handleClick: TFunc = (name, age) => {
    return name + " " + age;
  };

  handleClick("ramin", 12);
  return (
    <div>
      <h1>Hello world!</h1>

      {users.map((item: IUser) => {
        return <div key={item.name}>{item.getFullName()}</div>;
      })}
    </div>
  );
};

export default App;

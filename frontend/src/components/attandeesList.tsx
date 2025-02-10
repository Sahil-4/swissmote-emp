import styles from "../styles/eventDetails.module.css";

const AttandeesListItem = ({ name }: { name: string }) => {
  return <div className={styles.attandeesListItem}>{name}</div>;
};

const AttandeesList = () => {
  const attandees = [
    { name: "User1" },
    { name: "User2" },
    { name: "User3" },
    { name: "User4" },
    { name: "User5" },
    { name: "User6" },
  ];

  return (
    <div className={styles.attandeesList}>
      <p>Attandees ({attandees.length})</p>

      {attandees.map((user) => {
        return <AttandeesListItem name={user.name} />;
      })}
    </div>
  );
};

export default AttandeesList;

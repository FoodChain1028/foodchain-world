import Divider from "./Divider";
import BtLine from "./BtLine";

export const Project = ({ project }: any): JSX.Element => {
  const title = project?.title;
  const content = project?.content;
  const link = project?.link;
  const date = project?.date;
  const skills = project?.skills;

  return (
    <>
      {project && (
        <div>
          <h2 className="dark:text-white">
            ({date}) <a href={link}>{title}</a>
          </h2>
          <p>{content}</p>
          <b>Technique Used:</b>
          <ul className="list-disc pl-4 my-2">
            {skills &&
              skills.map((item: string, i: number) => (
                <li key={i + 1}>{item}</li>
              ))}
          </ul>
          <br />
          <BtLine />
        </div>
      )}
    </>
  );
};

export default Project;

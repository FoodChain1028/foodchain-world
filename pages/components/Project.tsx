import Divider from './Divider';
import BtLine from './BtLine';

export const Project = ({ project }): JSX.Element => {
  const title = project.title;
  const content = project.content;
  const link = project.link;
  const date = project.date;
  const skills = project.skills;

  return (
    <div>
      <BtLine />
      <h2 className="dark:text-white">
        ({date}) <a href={link}>{title}</a>
      </h2>
      <p>{content}</p>
      <b>Technique Used:</b>
      <ul className="list-disc pl-4 my-2">
        {skills.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <br />
    </div>
  );
};

export default Project;

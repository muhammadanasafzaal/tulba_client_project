import Image from "next/image";

const Content = (props) => {
  return (
    <div>
      <Image
        src={props.client}
        width={"150px"}
        height={"150px"}
        layout="fixed"
        alt="template"
      />
    </div>
  );
};

export default Content;

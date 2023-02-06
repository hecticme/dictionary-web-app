import { BsBoxArrowUpRight } from "react-icons/bs";

export function Source({ data }) {
  return (
    <div className="meaning__source">
      <div className="meaning__source__divider"></div>
      <p className="meaning__source__title">
        Source
        <a href={data[0].sourceUrls[0]} target="_blank">
          {data[0].sourceUrls[0]}
          <BsBoxArrowUpRight className="arrow-up-icon" />
        </a>
      </p>
    </div>
  );
}

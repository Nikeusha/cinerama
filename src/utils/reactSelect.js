import { components } from "react-select";
import makeAnimated from "react-select/animated";

export const options = [
  {
    value: "28",
    label: "Action",
  },
  {
    value: "12",
    label: "Adventure",
  },
  {
    value: "16",
    label: "Animation",
  },
  {
    value: "35",
    label: "Comedy",
  },
  {
    value: "80",
    label: "Crime",
  },
  {
    value: "99",
    label: "Documentary",
  },
  {
    value: "18",
    label: "Drama",
  },
  {
    value: "10751",
    label: "Family",
  },
  {
    value: "14",
    label: "Fantasy",
  },
  {
    value: "36",
    label: "History",
  },
  {
    value: "27",
    label: "Horror",
  },
  {
    value: "10402",
    label: "Music",
  },
  {
    value: "9648",
    label: "Mystery",
  },
  {
    value: "10749",
    label: "Romance",
  },
  {
    value: "878",
    label: "Science Fiction",
  },
  {
    value: "10770",
    label: "TV Movie",
  },
  {
    value: "53",
    label: "Thriller",
  },
  {
    value: "10752",
    label: "War",
  },
  {
    value: "37",
    label: "Western",
  },
];

const Input = (props) => {
  if (props.isHidden) {
    return <components.Input {...props} />;
  }
  return (
    <div className="m-[2px] py-[2px] visible text-white ">
      <components.Input
        style={{
          color: "inherit",
          background: "0px center",
          opacity: "1",
          font: "inherit",
          gridArea: "1 / 2 / auto / auto",
          minWidth: "2px",
          width: "100%",
          border: "0px",
          margin: "0px",
          outline: "0px",
          padding: "0px",
        }}
        {...props}
      />
    </div>
  );
};

const CustomClearText = () => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 20 20"
    aria-hidden="true"
    focusable="false"
    className="stroke-0 fill-current inline-block leading-[1] stroke-current"
  >
    <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
  </svg>
);

const ClearIndicator = (props) => {
  const { children = <CustomClearText />, innerProps } = props;
  return (
    <div className="react-select__indicator" {...innerProps}>
      {children}
    </div>
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        viewBox="0 0 6 10"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="14"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 0l3 4H0l3-4zM3 10l3-4H0l3 4z"
        ></path>
      </svg>
    </components.DropdownIndicator>
  );
};

export const animatedComponents = makeAnimated({
  Input,
  ClearIndicator,
  DropdownIndicator,
});

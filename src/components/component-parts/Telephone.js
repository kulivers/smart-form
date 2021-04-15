import MuiPhoneNumber from "material-ui-phone-number";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

export default (props) => {
  const onValueChange = (phoneNumber) => {
    props.setFormikValue("telephoneNumber", phoneNumber);
  };
  // console.log("telephone props: ", props);

  return (
    <MuiPhoneNumber
      defaultCountry={"ru"}
      onlyCountries={["de", "es", "ru"]}
      onChange={onValueChange}
    >
      {props.children}
    </MuiPhoneNumber>
  );
};

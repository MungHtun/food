import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 40eepec_X2j3VQWDjem5MdTFe1ds_TenNj6V0SpGWE26zeSwq4Xcr7ZdsdR7EFLvphkHkZay7td_lsZUMu9ZiZ2PP1FsV9Kt4CO3aR_zDHvtD8BAFDynCmi63oeXX3Yx",
  },
});

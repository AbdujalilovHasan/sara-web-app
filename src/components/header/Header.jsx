import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import './Header.css'
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";

function Header() {
  return (
    <div className="header-container">
      <p>Mening zakazlarim</p>
      <div className="box">
        <DatePicker
          defaultValue={dayjs("2025-01-06", dateFormat)}
          minDate={dayjs("2025-08-01", dateFormat)}
          maxDate={dayjs("2025-10-31", dateFormat)}
        />
      </div>
    </div>
  );
}

export default Header;
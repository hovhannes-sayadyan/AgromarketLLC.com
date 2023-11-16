import { memo } from "react";
import "./about.scss";

function AboutArm() {
  return (
    <div className="AboutImgDiv">
      <div className="AboutDiv">
        <h1 className="AboutTitle">ՄԵՐ ՄԱՍԻՆ</h1>
        <p className="AboutP">
          ՄԵՆՔ ԱՇԽԱՏՈՒՄ ԵՆՔ 2009 թվականից և ՈՒՆԵՆՔ ԲԱԶՄԱԹԻՎ ԳՈՐԾԸՆԿԵՐ ԽԱՆՈՒԹՆԵՐ
          ԲՈԼՈՐ ՀԱՅԱՍՏԱՆԻ ՄԱՐԶԵՐՈՒՄ.ՄԵՆՔ ՊԱՇՏՈՆԱԿԱՆ ՆԵՐԿԱՅԱՑՈՒՑԻՉՆ ԵՆՔ DVA
          AGRO-Ի (ԳԵՐՄԱՆԻԱ), GRUPOINESTA-Ի (Իսպանիա), Nature SA-Ի (ՀՈՒՆԱՍՏԱՆ),
          PARIJAT-Ի (ՀՆԴԿԱՍՏԱՆ) ԵՎ JU AGRI-Ի (ՀՆԴԿԱՍՏԱՆ) ՀԱՅԱՍՏԱՆՈՒՄ. ԱՅԴ
          ԸՆԿԵՐՈՒԹՅՈՒՆՆԵՐԻ ՄԱՍԻՆ ՄԱՐԴԻԿ ԳԻՏԵՆ ԱՄԲՈՂՋ ԱՇԽԱՐՀՈՒՄ.
        </p>
      </div>
    </div>
  );
}

export default memo(AboutArm);

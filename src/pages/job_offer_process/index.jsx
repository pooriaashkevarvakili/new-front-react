import {PureComponent} from "react";
import {Card ,Layout} from "antd";
import JobOfferProcessBoard from "@/pages/job_offer_process/JobOfferProcessBoard/JobOfferProcessBoard";
const { Content} = Layout;
export default class PageCom extends PureComponent {
  render() {
    return <Card>
     <JobOfferProcessBoard/>
     {/* سلام هاکوپیان*/}
    </Card>
  }
}

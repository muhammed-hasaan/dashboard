import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import '../App.css'
import { color } from "framer-motion";
export function input() {
  return <input type="text" />
}
export function Webcard() {
  return (
    <span style={{ marginTop: "100px" }}>
      <Card className="mt-6 w-96 bg-[#56613F] h-50" id="card1">
        card1
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-2 text-white" >
            Total Donation
          </Typography>
          <Typography variant="h3" color="blue-gray" className="mb-2 text-white" >
            11,875.00$
          </Typography>
        </CardBody>
        <CardFooter className="pt-0" style={{ marginTop: "-30px", marginLeft: "4px" }}>
          <Typography variant="h6" color="blue-gray" className="mb-2 text-white">
            More than previous Month
          </Typography>
        </CardFooter>
      </Card>
    </span>
  );
}


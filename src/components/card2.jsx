import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import '../App.css'
import { color } from "framer-motion";
export function Webcard2() {
  return (
    <Card className="mt-6 w-96 bg-white h-26" id="card2" >
      <p className="text-white">card2</p>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2 text-#56613F" >
          Total Donation
        </Typography>
        <Typography variant="h3" color="blue-gray" className="mb-2 text-#56613F" >
          11,875.00$
        </Typography>
      </CardBody>
      <CardFooter className="pt-0" style={{ marginTop: "-30px", marginLeft: "4px" }}>
        <Typography variant="h6" color="blue-gray" className="mb-2 text-#56613F" >
          More than previous Month
        </Typography>
      </CardFooter>
    </Card>
  );
}


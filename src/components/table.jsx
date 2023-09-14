import { Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["#","Name", "Email", "Donation Date"];
const TABLE_ROWS = [
  {
    number:"01",
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    number:"02",
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    number:"03",
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    number:"04",
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    number:"05",
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
export function Webtable() {
  return (
    <>
      <Card className="h-full w-full overflow-scroll" style={{ padding: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "20px" }}>
          <h1 style={{ fontSize: "30px" }}>Recent Donations</h1>
          <button style={{ border: "1px solid gray", padding: "10px", width: "100px", color: "gray", borderRadius: "20px" }}>Filter</button>
        </div>
        <br />
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({number , name, job, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {number}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
}
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  const Cart = ({ title, image,description,GithubLink, frontendTechStack, backendTechStack }: any) => {
    return (
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              <img src={image} alt="" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{description}</p>
            <p className="mt-5">
                <strong>GithubLink Source Code: </strong>{GithubLink}
            </p>
          </CardContent>
          <CardFooter className="flex-col flex gap-5 items-start">
            <p>
              <strong>Frontend Tech Stack: </strong> {frontendTechStack.join(", ")}
            </p>
            <p>
              <strong>Backend Tech Stack: </strong> {backendTechStack.join(", ")}
            </p>
          </CardFooter>
        </Card>
      </div>
    );
  };
  
  export default Cart;
  
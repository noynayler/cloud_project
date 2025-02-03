locals {
  common_tags = {
    owner = "YourName" # Replace with a placeholder or leave as is
    usage = "project"
  }
  vpc_name       = "cloud-project"  # A name for the VPC
  cidr           = "10.10.0.0/16"   # The IP range for the VPC
  public_subnets = ["10.10.0.0/20", "10.10.16.0/20"] # IP ranges for public subnets

  ec2_key_name   = "YOUR_KEY_NAME"  # Replace with a placeholder (e.g., "<YOUR_KEY_NAME>")
  app_ami        = "ami-0c55b159cbfafe1f0" # Replace with a placeholder or describe in README
  instance_type  = "t2.micro"       # Generalized instance type
}
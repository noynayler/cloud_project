locals {
  common_tags = {
    owner = "Noy"
    usage = "project"
  }
  vpc_name       = "cloud-project"  # a name to our VPC
  cidr           = "10.10.0.0/16" # the IP range for our whole VPC
  public_subnets = ["10.10.0.0/20", "10.10.16.0/20"] # to have 3 subnets we created 3 IP ranges for 3 AZs

  ec2_key_name="test"
  app_ami="ami-01e4af9773d607b48"
  instance_type="t2.micro"

}

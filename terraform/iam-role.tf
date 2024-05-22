#data "aws_iam_policy" "required-policy"{
#  name="ec2-roles-test"
#  arn = ""
#}



#create the role

resource "aws_iam_role" "ec2_role" {
  name = "ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid=""
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      },
    ]
  })
}

##attach the role
#resource "aws_iam_role_policy_attachment" "attach-s3" {
#  role       = aws_iam_role.ec2-role.name
#  policy_arn = data.aws_iam_policy.required-policy.arn
#}

resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name="ec2_instance_profile"
  role = aws_iam_role.ec2_role.name
}
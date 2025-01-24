export default {
  name: "signUp",
  title: "Sign Up",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule) => Rule.required().min(8).max(128),
    },
    {
      name: "confirmPassword",
      title: "Confirm Password",
      type: "string",
      validation: (Rule) => Rule.required().min(8).max(128),
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
  ],
};
